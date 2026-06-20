// Safe Math Expression Parser and Evaluator
// Supports Degree and Radian modes for trigonometric calculations

export type AngleMode = 'deg' | 'rad';

// Factorial helper
export function factorial(n: number): number {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= Math.min(n, 170); i++) {
    result *= i;
  }
  return n > 170 ? Infinity : result;
}

export function evaluateExpression(
  expression: string,
  angleMode: AngleMode = 'deg'
): number {
  if (!expression || expression.trim() === '') {
    return 0;
  }

  // Pre-process the expression string
  let processed = expression
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, Math.PI.toString())
    .replace(/e/g, Math.E.toString());

  // Handle percentages: e.g. "50%" -> "50*0.01", "10+5%" -> "10+10*5*0.01" or just simple "number * 0.01"
  // A simple regex replacement for "%" to "*0.01" is generally what standard calculators do when standing alone
  processed = processed.replace(/(\d+(\.\d+)?)%/g, '($1*0.01)');

  // Solve factorial. Example: "5!" -> we find digits followed by ! and compute
  // Let's replace "(\d+)\!" with custom evaluation or just pre-evaluating it
  processed = processed.replace(/(\d+)\!/g, (_, num) => {
    return factorial(parseInt(num, 10)).toString();
  });

  // Handle implicit multiplication like "2(3+4)" -> "2*(3+4)" or "π(2)" -> "π*(2)"
  processed = processed.replace(/(\d+|\)|π|e)\s*\(/g, '$1*(');
  processed = processed.replace(/\)\s*(\d+|π|e)/g, ')*$1');

  // Handle square root: "√(9)" -> "Math.sqrt(9)"
  // We will parse functions. We support: sin, cos, tan, log, ln, sqrt
  // Let's replace trig functions considering angleMode
  
  // Custom parser to safely handle nested Parentheses & Math functions
  // We will replace mathematical terms with JS Math calls safely
  // To support DEG/RAD:
  // If in DEG mode, we wrap the inside of sin/cos/tan with a conversion: (val * Math.PI / 180)
  
  // We can use a regex replacement loop for functions to handle nesting correctly
  // Let's implement a parser or a safe regex replacement that converts:
  // sqrt(x) -> Math.sqrt(x)
  // sin(x) -> Math.sin(x) or Math.sin(x * PI / 180)
  // cos(x) -> Math.cos(x) or Math.cos(x * PI / 180)
  // tan(x) -> Math.tan(x) or Math.tan(x * PI / 180)
  // log(x) -> Math.log10(x)
  // ln(x)  -> Math.log(x)
  
  // Let's do string replacement for functions, but we must be careful of nested parentheses.
  // Instead of complex parsing, since we control the button inputs and structure, we can map:
  // "sin(" -> angleMode === 'deg' ? "Math.sin((Math.PI/180)*" : "Math.sin("
  // "cos(" -> angleMode === 'deg' ? "Math.cos((Math.PI/180)*" : "Math.cos("
  // "tan(" -> angleMode === 'deg' ? "Math.tan((Math.PI/180)*" : "Math.tan("
  // "ln(" -> "Math.log("
  // "log(" -> "Math.log10("
  // "√(" -> "Math.sqrt("
  
  processed = processed.replace(/sin\(/g, angleMode === 'deg' ? 'Math.sin((Math.PI/180)*' : 'Math.sin(');
  processed = processed.replace(/cos\(/g, angleMode === 'deg' ? 'Math.cos((Math.PI/180)*' : 'Math.cos(');
  processed = processed.replace(/tan\(/g, angleMode === 'deg' ? 'Math.tan((Math.PI/180)*' : 'Math.tan(');
  processed = processed.replace(/ln\(/g, 'Math.log(');
  processed = processed.replace(/log\(/g, 'Math.log10(');
  processed = processed.replace(/√\(/g, 'Math.sqrt(');

  // Exponentiation: "x^y" -> "Math.pow(x, y)" or using "**" operator in JS
  // JS supports "**", but let's replace "^" with "**"
  processed = processed.replace(/\^/g, '**');

  // Sanitize: Allow only numbers, operators, dots, parentheses, and safe Math.xxx functions
  // Valid tokens: digits, +, -, *, /, ., (, ), Math.sin, Math.cos, Math.tan, Math.log, Math.log10, Math.sqrt, Math.PI, Math.E, **, commas (if any), spaces
  const sanitized = processed.replace(/[^0-9+\-*/.() ,\s]|(Math\.(sin|cos|tan|log|log10|sqrt|PI|E))|(\*\*)/g, (match) => {
    // If it matched one of the safe Math functions or **, return it, otherwise discard
    if (
      match.startsWith('Math.') ||
      match === '**' ||
      match === '+' ||
      match === '-' ||
      match === '*' ||
      match === '/' ||
      match === '.' ||
      match === '(' ||
      match === ')' ||
      match === ','
    ) {
      return match;
    }
    return '';
  });

  try {
    // Evaluate the sanitized expression safely
    // eslint-disable-next-line no-eval
    const result = Function(`"use strict"; return (${sanitized})`)();
    
    if (typeof result !== 'number' || isNaN(result)) {
      throw new Error('Invalid calculation');
    }
    
    return result;
  } catch (error) {
    throw new Error('Math Error');
  }
}
