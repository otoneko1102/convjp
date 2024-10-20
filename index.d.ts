declare module 'mojibake.jp' {
  /**
   * Mojibakeクラス
   * UTF-8とShift_JIS間の文字化けエンコード・デコードを行う
   */
  class Mojibake {
      /**
       * 意図的に文字化けさせる
       * @param input - 文字列
       * @returns 文字化けした文字列
       */
      encode(input: string): string;

      /**
       * 文字化けした文字列を元の文字列に復元する
       * @param input - 文字化けした文字列
       * @returns 元の文字列
       */
      decode(input: string): string;
  }

  export = Mojibake;
}
