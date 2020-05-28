const getDateString = (date) => {
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

module.exports = getDateString;

// Delete this?