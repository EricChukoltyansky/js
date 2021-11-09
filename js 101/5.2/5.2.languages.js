let lang = function(language) {
    switch(language) {
        case 'mandarin': 
        return 'Most number of native speakers!'; break;
        case 'spanish': 
        return '2nd place in number of natve speakers'; break;
        case 'english': 
        return '3rd place'; break;
        case 'hindi': 
        return "Number 4"; break;
        case 'arabic': 
        return "5th most spoken language"; break;
        default: 'Not in the top 5'

    }
}

console.log(lang('mandarin'))
console.log(lang('spanish'))
console.log(lang('hindi'))
console.log(lang('arabic'))