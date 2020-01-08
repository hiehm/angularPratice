export interface SvgRect {
    padding: {
        top: number,
        right: number,
        bottom: number,
        left: number
    }, // 內距
    graphicHeight?: number, // 圖表高度為svg高度扣掉內距
    rectStep: number, // 各別長條圖的距離
    rectWidth: number,  // 長條圖的寬度
    maxValue: number  // 數值最大值
}
