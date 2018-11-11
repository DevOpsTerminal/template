function truncateWords(sentence, amount, tail) {
    const words = sentence.split(' ');

    if (amount >= words.length) {
        return sentence;
    }

    const truncated = words.slice(0, amount);
    return `${truncated.join(' ')}${tail}`;
}

// const sentence = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
// console.log(truncateWords(sentence, 10, '...'));