module.exports = {
    isEmpty: function(content) {
        if (content && content.length > 0 && content != ' ') {
            return false;
        }

        return true;
    },
}