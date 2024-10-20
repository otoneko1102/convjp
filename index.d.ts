declare module 'convjp' {
  class Mojibake {
      encode(input: string): string;
      decode(input: string): string;
  }

  export = Mojibake;
}
