//https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript
function short_description_with_whole_words(str, length, delim, appendix) {
    if (str.length <= length) return str;

    var trimmedStr = str.substr(0, length+delim.length);

    var lastDelimIndex = trimmedStr.lastIndexOf(delim);
    if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
}

// smartTrim(yourString, 11, ' ', ' ...')
// "The quick ..."