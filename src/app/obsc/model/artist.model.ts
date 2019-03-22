export class ArtistModel {
    constructor(
        public name: string,
        public image: string,
        public listeners: number,
        public obscurity: number,
        public summary: string
        ){}
}