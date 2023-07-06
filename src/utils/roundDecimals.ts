
export function roundDecimals(num: number, numDecimals: number) {
    num *= 10 ** numDecimals;
    num = Math.round(num);
    num /= 10 ** numDecimals;
    return num;
}