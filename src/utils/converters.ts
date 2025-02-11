type ConversionMode = 'standard' | 'ascii' | 'phone';

// 判断分隔符是否为分词用的（多个空格或其他分隔符）
const isWordSeparator = (str: string): boolean => {
  // 只匹配多个空格，不再匹配标点符号
  return /^\s{2,}$/.test(str);
};

export const convertLettersToNumber = (
  input: string,
  mode: ConversionMode
): string => {
  if (!input.trim()) {
    return '';
  }

  switch (mode) {
    case 'standard': {
      // 使用正则表达式分割，保留所有分隔符
      return input.split(/(\s+)/).map(part => {
        if (isWordSeparator(part)) {
          return part; // 保留原始分隔符
        }
        return part.toUpperCase()
          .split('')
          .map(char => {
            if (!/[A-Z]/.test(char)) return char;
            const code = char.charCodeAt(0) - 64;
            return code.toString();
          })
          .join(' ');
      }).join('');
    }

    case 'ascii':
      return input
        .split(/(\s+)/)
        .map(part => {
          if (isWordSeparator(part)) {
            return part; // 保留原始分隔符
          }
          return part
            .split('')
            .map(char => char.charCodeAt(0).toString())
            .join(' ');
        })
        .join('');

    case 'phone': {
      const phoneKeyMap: { [key: string]: string } = {
        'A': '2', 'B': '22', 'C': '222',
        'D': '3', 'E': '33', 'F': '333',
        'G': '4', 'H': '44', 'I': '444',
        'J': '5', 'K': '55', 'L': '555',
        'M': '6', 'N': '66', 'O': '666',
        'P': '7', 'Q': '77', 'R': '777', 'S': '7777',
        'T': '8', 'U': '88', 'V': '888',
        'W': '9', 'X': '99', 'Y': '999', 'Z': '9999'
      };
      return input
        .split(/(\s+)/)
        .map(part => {
          if (isWordSeparator(part)) {
            return part; // 保留原始分隔符
          }
          return part.toUpperCase()
            .split('')
            .map(char => {
              if (!/[A-Z]/.test(char)) return char;
              return phoneKeyMap[char];
            })
            .join(' ');
        })
        .join('');
    }

    default:
      throw new Error('Invalid conversion mode');
  }
};

export const convertNumberToLetters = (
  input: string,
  mode: ConversionMode
): string => {
  if (!input.trim()) {
    return '';
  }

  switch (mode) {
    case 'standard': {
      const segments = input.split(/(\s+)/);
      let result = '';
      
      for (const segment of segments) {
        if (isWordSeparator(segment)) {
          result += ' '; // 多个空格转换为单个空格
          continue;
        }
        if (!segment.trim()) continue;
        
        // 处理每个数字组
        const numbers = segment.trim().split(/\s+/);
        for (const num of numbers) {
          const code = parseInt(num);
          if (isNaN(code)) {
            throw new Error('Please enter valid numbers');
          }
          // 处理两位数
          if (code >= 10) {
            const tens = Math.floor(code / 10);
            const ones = code % 10;
            if (tens > 2 || (tens === 2 && ones > 6)) {
              throw new Error('Please enter numbers between 1-26');
            }
            result += String.fromCharCode(code + 64);
          } else {
            if (code < 1 || code > 26) {
              throw new Error('Please enter numbers between 1-26');
            }
            result += String.fromCharCode(code + 64);
          }
        }
      }
      return result;
    }

    case 'ascii': {
      const segments = input.split(/(\s+)/);
      let result = '';
      
      for (const segment of segments) {
        if (isWordSeparator(segment)) {
          result += ' '; // 多个空格转换为单个空格
          continue;
        }
        if (!segment.trim()) continue;
        
        const numbers = segment.trim().split(/\s+/);
        for (const num of numbers) {
          const code = parseInt(num);
          if (isNaN(code)) {
            throw new Error('Please enter valid ASCII codes');
          }
          result += String.fromCharCode(code);
        }
      }
      return result;
    }

    case 'phone': {
      const phoneMap: { [key: string]: string } = {
        '2': 'A', '22': 'B', '222': 'C',
        '3': 'D', '33': 'E', '333': 'F',
        '4': 'G', '44': 'H', '444': 'I',
        '5': 'J', '55': 'K', '555': 'L',
        '6': 'M', '66': 'N', '666': 'O',
        '7': 'P', '77': 'Q', '777': 'R', '7777': 'S',
        '8': 'T', '88': 'U', '888': 'V',
        '9': 'W', '99': 'X', '999': 'Y', '9999': 'Z'
      };
      
      const segments = input.split(/(\s+)/);
      let result = '';
      
      for (const segment of segments) {
        if (isWordSeparator(segment)) {
          result += ' '; // 多个空格转换为单个空格
          continue;
        }
        if (!segment.trim()) continue;
        
        const numbers = segment.trim().split(/\s+/);
        for (const num of numbers) {
          const letter = phoneMap[num];
          if (!letter) {
            throw new Error('Invalid phone keypad code');
          }
          result += letter;
        }
      }
      return result;
    }

    default:
      throw new Error('Invalid conversion mode');
  }
};
