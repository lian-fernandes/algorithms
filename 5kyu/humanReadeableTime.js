function humanReadable(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
        h > 9 ? h : '0' + h,
        m > 9 ? m : '0' + m,
        s > 9 ? s : '0' + s
    ].filter(Boolean).join(':')
}

console.log(humanReadable(359999))
