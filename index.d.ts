declare module "react-native-animated-sticker-chz" {
  export default class AnimatedSticker {
    /**
     * This step is required to create initial files on userApp
     * @param {Array} data
     *
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#IntialApp-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */
    static InitialApp(): void;

    /**
     * Check if it is sticker?
     * @param {String} name
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#issticker-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */
    static isSticker(): void;

    /**
     * Get sticker name as string
     * @param {String} uri
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#getname-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static getName(): void;

    /**
     * set extra category
     * @param {Array} category
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#setextracategory-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static setExtraCategory(): void;

    /**
     * set extra emojis
     * @param {Array} items
     * @see https://github.com/chzappsinc/react-native-animated-stickers-chz#setextraemojis-1
     *
     * @author JASIM TK - CHZAPPS
     * @see https://chzapps.com
     */

    static setExtraEmojis(): void;
  }
}
