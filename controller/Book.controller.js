import Book from "../model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books: ", error);
    res.status(500).json({ error: "Error fetching books" });
  }
};
