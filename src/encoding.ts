export const ieee754 = (n: number) => {
  const buffer = Buffer.allocUnsafe(4);
  buffer.writeFloatLE(n, 0);
  return Uint8Array.from(buffer);
}

export const encodingString = (str: string) => [
  str.length,
  ...str.split("").map(s => s.charCodeAt(0))
];

// little endian binary?
export const signedLEB128 = (n: number) => {
  const buffer = [];
  let next = true;

  while(next) {
    // 0111 1111
    let byte = n & 0x7f;
    n >>>= 0x07;

    if ((n === 0 && (byte & 0x40) === 0) || (n === -1 && (byte & 0x40) !== 0)) {
      next = false;
    } else {
      byte |= 0x80;
    }

    buffer.push(byte);
  }

  return buffer;
};

export const unsignedLEB128 = (n: number) => {
  const buffer = [];

  do {
    let byte = n & 0x7f;
    n >>>= 7;

    if (n !== 0) {
      byte |= 0x80;
    }

    buffer.push(byte);
  } while(n !== 0);

  return buffer;
}

