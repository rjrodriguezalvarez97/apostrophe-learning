module.exports = {
    // We already set the "extend" option in app.js, or we'd need it here
    // Specify the schema fields we want to be able to filter by
    piecesFilters: [
      {
        name: 'tags',
        counts: true
      }
    ]
  }