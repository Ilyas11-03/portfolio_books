const express = require('express')
const axios = require('axios')
const router = express.Router()

//Search the books from Open Library
router.get('/search', async (req, res) => {
  const { query} = req.query //Request from the user

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' })

  }

  try {
    //Call the Open library API
    const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
    const books = response.data.docs.map(book => ({
      title: book.title,
      author: book.author_name? book.author_name.join(', ') : 'Unknown',
      first_publish_year: book.first_publish_year || 'N/A',
      cover_url: book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
        : null,
    }))

    res.status(200).json(books)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: 'Error fetching books!'})
  }
})

module.exports = router;