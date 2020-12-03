const magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
const moduleVersion = [0x01, 0x00, 0x00, 0x00];

interface Emitter {
  (): Uint8Array;
}

export const emitter: Emitter = () => {
  const buffer = [
    ...magicModuleHeader,
    ...moduleVersion
  ];
  return Uint8Array.from(buffer);
}
