function port3000(app){
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server started successfully.\nOpen now at http://localhost:${PORT}`))
}

module.exports = port3000;
