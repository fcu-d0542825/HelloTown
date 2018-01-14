$(document).ready(function () {
    
    
    $.ajax({
        type: 'GET',
        url: './php/information.php',
        dataType: 'json',
        account: {
        },
        success: function (account) {            
            if (account != "NULL") {
                alert("您已登入\n將轉至首頁");
                document.location.href = "./Home.html";
            }
        }
    });

    $('#sendMessageButton').click(function () {
        if ($('#account').val() != "" && $('#password').val() != "") {
            user = $('#account').val();
            $.ajax({
                type: 'POST',
                url: './php/checkLogin.php',
                dataType: 'text',
                data: {
                    'username': user,
                    'password': $('#password').val(),
                },
                success: function (data) {
                    $.ajax({
                        type: 'GET',
                        url: './php/information.php',
                        dataType: 'json',
                        account: {
                        },
                        success: function (account) {
                            if (account == user) {
                                alert('歡迎' + user);
                                document.location.href = "./Home.html";
                            }
                            else {
                                alert("帳號或密碼錯誤");
                            }
                        }
                    });
                }
            });
        }
        else {
            alert("帳號或密碼錯誤");
        }

    });
});
