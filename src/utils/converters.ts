type ConversionMode = 'standard' | 'ascii' | 'phone';

export const convertLettersToNumber = (
  input: string,
  mode: ConversionMode
): string => {
  if (!input.trim()) {
    return '';
  }

  switch (mode) {
    case 'standard': {
      const letters = input.toUpperCase().replace(/[^A-Z]/g, '');
      if (!letters) {
        throw new Error('Please enter letters A-Z');
      }
      return letters
        .split('')
        .map(char => {
          const code = char.charCodeAt(0) - 64;
          return code.toString();
        })
        .join(' ');
    }

    case 'ascii':
      return input
        .split('')
        .map(char => char.charCodeAt(0).toString())
        .join(' ');

    case 'phone': {
      const reverseKeyMap: { [key: string]: string } = {
        'A': '2', 'B': '2', 'C': '2',
        'D': '3', 'E': '3', 'F': '3',
        'G': '4', 'H': '4', 'I': '4',
        'J': '5', 'K': '5', 'L': '5',
        'M': '6', 'N': '6', 'O': '6',
        'P': '7', 'Q': '7', 'R': '7', 'S': '7',
        'T': '8', 'U': '8', 'V': '8',
        'W': '9', 'X': '9', 'Y': '9', 'Z': '9'
      };
      const letters = input.toUpperCase().replace(/[^A-Z]/g, '');
      if (!letters) {
        throw new Error('Please enter letters A-Z');
      }
      return letters.split('').map(char => reverseKeyMap[char]).join('');
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
      // 检测连续空格的数量
      const segments = input.split(/(\s{2,}|\s)/);
      return segments.map(segment => {
        if (/^\s+$/.test(segment)) {
          // 如果是两个以上的空格，保留一个空格
          return segment.length >= 2 ? ' ' : '';
        }
        if (!segment) return '';
        
        // 处理数字部分
        const numbers = segment.trim().split(/[,\s]+/);
        if (!numbers.length) {
          throw new Error('Please enter numbers between 1-26');
        }
        // 如果输入是一个多位数，先尝试作为一个整体处理
        if (numbers.length === 1 && !input.includes(' ') && !input.includes(',')) {
          const digits = numbers[0].split('');
          const result = [];
          for (let i = 0; i < digits.length; i++) {
            const code = parseInt(digits[i]);
            if (isNaN(code) || code < 1 || code > 26) {
              throw new Error('Please enter numbers between 1-26');
            }
            result.push(String.fromCharCode(code + 64));
          }
          return result.join('');
        }
        // 否则按空格或逗号分隔处理
        return numbers
          .map(num => {
            const code = parseInt(num);
            if (isNaN(code) || code < 1 || code > 26) {
              throw new Error('Please enter numbers between 1-26');
            }
            return String.fromCharCode(code + 64);
          })
          .join('');
      }).join('');
    }

    case 'ascii': {
      // 支持多种分隔符或无分隔符
      const numbers = input.trim().split(/[,\s]+|(?<=\d)(?=\d)/);
      return numbers
        .map(num => {
          const code = parseInt(num);
          if (isNaN(code)) {
            throw new Error('Please enter valid ASCII codes');
          }
          return String.fromCharCode(code);
        })
        .join('');
    }

    case 'phone': {
      const keyMap: { [key: string]: string[] } = {
        '2': ['A', 'B', 'C'],
        '3': ['D', 'E', 'F'],
        '4': ['G', 'H', 'I'],
        '5': ['J', 'K', 'L'],
        '6': ['M', 'N', 'O'],
        '7': ['P', 'Q', 'R', 'S'],
        '8': ['T', 'U', 'V'],
        '9': ['W', 'X', 'Y', 'Z']
      };
      
      // 移除所有非数字字符
      const numbers = input.replace(/[^\d]/g, '').split('');
      if (!numbers.length) {
        throw new Error('Please enter numbers 2-9');
      }
      
      return numbers
        .map(num => {
          const letters = keyMap[num];
          if (!letters) {
            throw new Error('Please enter numbers 2-9');
          }
          return letters[0];
        })
        .join('');
    }

    default:
      throw new Error('Invalid conversion mode');
  }
};
