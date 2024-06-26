import * as fs from "fs";

export default class CommonUtils {
    static splitValue(value: any, index: any): any {
        let newValue = value.split(" ")[index];
        return newValue;
    }

    static convertCurrencyToNumber(value: any) {
        return Number(value.replace(/[^0-9.-]+/g, ""));
    }
    static randomIndex(arrLength: number) {
        return Math.floor(Math.random() * arrLength);
    }

    // static getTestData(fileName: string) {
    //     let name = fileName.replace(".spec.ts", ".csv");
    //     return parse(fs.readFileSync(`projects/LambdaTest/testdata/${name}`), {
    //         columns: true,
    //         skip_empty_lines: true
    //     });
    // }
}
