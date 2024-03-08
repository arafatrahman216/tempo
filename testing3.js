<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <title>Change Password</title>

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-image: url("../images/home/bg1.jpg");
            background-size: cover;
            font-family: Roboto;
            background-attachment: fixed;
            background-repeat: no-repeat;
        }

        .glass-box {
            display: flex;
            position: relative;
            width: 900px;
            /* Adjust the width as needed */
            height: 600px;
            /* Adjust the height as needed */
            background-color: white;
            box-shadow: 5px 5px 5px 3px rgba(2, 4, 0, 0.1);
            /* Box shadow for the glass effect */
            backdrop-filter: blur(1000px);
            /* Blur for the frosted glass effect */
            overflow: hidden;
            /* Ensure the content does not overflow outside the glass-box */
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
            z-index: 1;
            /* Ensure the sidebar is above the glass-box content */
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
            display: block;
        }

        .sidebar-text:hover {
            color: blue;
        }

        .HeadLine {
            margin-left: 280px;
            padding: 90px;
        }

        .formContent {
            flex-grow: 1;
            padding: 20px;
            margin-left: 240px;
        }

        .FormAttribute {
            padding: 7px;
            margin-left: 300px;
        }

        .FormInputBox {
            margin-left: 10px;
        }

        .btn-primary {
            padding: 10px;
            margin-top: 50px;
            margin-left: 430px;
            width: 190px;
        }

        .messageFormat {
            margin-left: 350px;
            margin-top: 20px;
            color: black;
        }

        .sidebar-logo {
            width: 100%;
            /* Make the image fill the entire width of the sidebar */
            max-height: 130px;
            /* Set a maximum height for the image */
            margin-bottom: 20px;
            /* Adjust as needed for spacing */
            border-radius: 50%;
        }
    </style>
</head>

<body>

    <div class="glass-box">

        <div class="sidebar">
            <img src="../images/UserProfile/<%=PROFILE_PICTURE %>" alt="Your Image" class="sidebar-logo">

            <a class="sidebar-text" href="/user/<%= userID %>">Your Profile</a>
            <a class="sidebar-text" href="/order/<%= userID %>">Order History</a>
            <a class="sidebar-text" href="/wishlist/<%= userID%>">Wishlist Products</a>
            <a class="sidebar-text" href="/OrderTrack/<%= userID%>">Track Your Last Order</a>
            <a class="sidebar-text" href="/Password/<%= userID%>">Change Password</a>

        </div>

        <div>
            <h2 class="HeadLine">Change Your Password</h2>

            <form action="/Password/<%= userID%>" method="post">

                <div class=" FormAttribute">
                    <label for="oldPassword">Old Password:- </label>
                    <input type="password" class="FormInputBox" id="oldPassword" name="oldPassword" required>
                    <button type="button" onclick="togglePasswordVisibility('oldPassword')">Show/Hide</button>
                </div>

                <div class="FormAttribute">
                    <label for="newPassword">New Password:- </label>
                    <input type="password" class="FormInputBox" id="newPassword" name="newPassword" required>
                    <button type="button" onclick="togglePasswordVisibility('newPassword')">Show/Hide</button>
                </div>

                <div class="FormAttribute">
                    <label for="confirmPassword">Confirm Password:- </label>
                    <input type="password" class="FormInputBox" id="confirmPassword" name="confirmPassword" required>
                    <button type="button" onclick="togglePasswordVisibility('confirmPassword')">Show/Hide</button>
                </div>

                <div id="message" class="messageFormat">
                    <% if (typeof message !== 'undefined') { %>
                        <p><%= message %></p>
                    <% } %>
                </div>                

                <button type="submit" class="btn btn-primary btn-block">Change Password</button>
            </form>

        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
<script>
    // Function to hide the message after 5 seconds
    function hideMessage() {
        setTimeout(function() {
            var messageDiv = document.getElementById('message');
            messageDiv.style.display = 'none';
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    // Call the hideMessage function when the page loads
    window.onload = function() {
        hideMessage();
    };
</script>

<script>
    function togglePasswordVisibility(inputId) {
        var input = document.getElementById(inputId);
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }
</script>

</html>


.eye-icon {
            margin-left: 370px;
        }