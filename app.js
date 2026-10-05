// Phien ban he thong v1.0.0
function getUser(user) {
    // BUG: Lo mat khau nguoi dung
    return {
        id: user.id,
        username: user.username,
        password: user.password
    };
}

module.exports = { getUser };
