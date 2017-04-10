function camelize(value) {
    return value
        .replace(/[\W_]$/, '')
        .replace(/[\W_]([a-zA-Z0-9])/g, (_, x) => x.toUpperCase());
}

module.exports = function(value) {
    let trimmed = value.trim();
    return trimmed.substr(0, 1).toUpperCase() + camelize(trimmed.substr(1));
};
