function clockAngleCalc(secs) {
    var res = 0;
    var n = secs / 43200;
    res = n * 360;

    return res;
}

console.log(clockAngleCalc(32400));