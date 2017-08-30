/**
 * Created by NguyenNK3 on 5/5/2017.
 */

export class Action {
    index: number;
    type: string;
    start: string;
    end: string;
    fileName: string;

    constructor(){
        this.index = 0;
        this.type = "";
        this.start = "";
        this.end = "";
        this.fileName = "";
    }
}