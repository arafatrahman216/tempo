<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <title>Seller Profile</title>

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: white; /* Optional: Background color for the page */
        }

        .glass-box {
            display: flex;
            position: relative;
            width: 900px; /* Adjust the width as needed */
            height: 600px; /* Adjust the height as needed */
            background-color: white;
            box-shadow: 5px 5px 5px 3px rgba(2, 4, 0, 0.1); /* Box shadow for the glass effect */
            backdrop-filter: blur(1000px); /* Blur for the frosted glass effect */
            overflow: hidden; /* Ensure the content does not overflow outside the glass-box */
            border-radius: 10%;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 175px;
            height: 100%;
            padding: 20px;
            background-color: black;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1; /* Ensure the sidebar is above the glass-box content */
        }

        .sidebar-text {
            font-family: Roboto;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 20px;
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 17px;
        }

        .sidebar-text:hover {
            color: blue;
        }

        .HeadLine {
            margin-left: 370px;
            padding: 40px;
        }

        .sidebar-logo {
            width: 100%; /* Make the image fill the entire width of the sidebar */
            max-height: 100px; /* Set a maximum height for the image */
            margin-bottom: 20px; /* Adjust as needed for spacing */
        }

        /* Add additional styles for the table */
        .product-table {
            flex: 1; /* Fill remaining space beside the sidebar */
            padding: 10px;
            margin-left: 170px;
        }

        .edit-input {
            width: 100%;
        }

    </style>
</head>

<body>

    <div class="glass-box">

        <div class="sidebar">
            <img src="#" alt="Your Logo" class="sidebar-logo">
            <a class="sidebar-text" href="/seller_authorize/<%= SHOP_NAME %>/<%= SHOP_ID %>">Your Profile</a>
            <a class="sidebar-text" href="/products/<%= SHOP_NAME %>/<%= SHOP_ID %>">Your Products</a>
            <a class="sidebar-text" href="/addproducts/<%= SHOP_NAME %>/<%= SHOP_ID %>">Add New Product</a>
            <a class="sidebar-text" href = "/pendingOrders/<%= SHOP_NAME %>/<%= SHOP_ID %>">Pending Orders</a>
            <a class="sidebar-text" href="#">Most Valued Products</a>
            <a class="sidebar-text" href="/password/<%= SHOP_NAME %>/<%= SHOP_ID %>">Change Password</a>
        </div>

        <!-- Products Table -->
        <div class="product-table">
            <h2 class="HeadLine">Your Products</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Promo Code</th>
                        <th>Action</th> <!-- Added Action column -->
                        <!-- Add more column headers as needed -->
                    </tr>
                </thead>
                <tbody>
                    <!-- Loop through products to generate table rows -->
                    <% if (products.length > 0) { %>
                        <% products.forEach(product => { %>
                            <tr>
                                <td><input type="text" class="edit-input" value="<%= product.PRODUCT_NAME %>"></td>
                                <td><input type="text" class="edit-input" value="<%= product.PRICE %>"></td>
                                <td><input type="text" class="edit-input" value="<%= product.STOCK_QUANTITY %>"></td>
                                <td><input type="text" class="edit-input" value="<%= product.PROMO_CODE %>"></td>
                                <td><button class="update-btn">Update</button></td> <!-- Added button -->
                                <!-- Add more columns as needed -->
                            </tr>
                        <% }); %>
                    <% } else { %>
                        <tr>
                            <td colspan="5">No products found.</td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <script>
        $(document).ready(function() {
            $('.update-btn').click(function() {
                var $this = $(this);
                var $row = $this.closest('tr');
                if ($this.text() === 'Update') {
                    $this.text('Save');
                    $row.find('.edit-input').prop('disabled', false); // Enable input fields for editing
                } else {
                    $this.text('Update');
                    $row.find('.edit-input').prop('disabled', true); // Disable input fields after saving
                    // Perform actions for saving product information here
                    // For example, you can make an AJAX request to save the product information
                }
            });
        });
    </script>
</body>

</html>
