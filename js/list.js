$(document).ready(function() {
    const books = [
        { id: 1, name: '江链空流示头', price: 78.5, publisher: '测试出版社4', pubDate: '2011-03-21', contact: '63831753673', address: '琼山区' },
        { id: 2, name: '别先统南便', price: 44.5, publisher: '测试出版社2', pubDate: '1985-08-13', contact: '73032326416', address: '梧桐市' },
        { id: 3, name: '花进力楼等', price: 57.81, publisher: '测试出版社4', pubDate: '2012-05-22', contact: '17181302969', address: '天元区' },
        { id: 4, name: '附动劳中温', price: 51.84, publisher: '测试出版社4', pubDate: '2022-07-12', contact: '46004764538', address: '惠农区' },
        { id: 5, name: '大货型建位', price: 50.9, publisher: '测试出版社4', pubDate: '1984-04-11', contact: '66237373668', address: '四方台区' },
        { id: 6, name: '子成由表自发', price: 39.1, publisher: '测试出版社3', pubDate: '1982-04-26', contact: '62393012163', address: '科尔沁左翼中旗' }
    ];

    function renderTable(data) {
        const tableBody = $('#bookTable tbody');
        tableBody.empty();
        data.forEach(book => {
            tableBody.append(`
                <tr>
                    <td>${book.id}</td>
                    <td>${book.name}</td>
                    <td>${book.price}</td>
                    <td>${book.publisher}</td>
                    <td>${book.pubDate}</td>
                    <td>${book.contact}</td>
                    <td>${book.address}</td>
                </tr>
            `);
        });
    }

    $('#searchBtn').click(function() {
        const searchTerm = $('#searchInput').val().trim();
        const filteredBooks = books.filter(book => book.name.includes(searchTerm));
        renderTable(filteredBooks);
    });

    // 初始渲染表格
    renderTable(books);
});
