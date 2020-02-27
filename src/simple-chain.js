const chainMaker = {
    chain: [],
    getLength() {
        this.chain.length;
        return this;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position < this.chain.length && position > 0 && typeof (position) == 'number') {
            this.chain.splice(position - 1, 1);
            return this;
        }
        this.chain = [];
        throw new Error();
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let array = this.chain;
        this.chain = [];
        return array.join('~~');
    }
};

module.exports = chainMaker;
