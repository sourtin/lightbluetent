// change site setting from dropdown
function changeSiteSetting(paths, data, token) {
    $.ajax({
        type: "POST",
        url: paths.success,
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'X-CSRFToken': token
        },
    }).done(function() {
        window.location.reload();
    }).fail(function(res, status, error) {
        $.ajax({
            type: "POST",
            url: paths.error,
            data: JSON.stringify({ code: res.status, name: error }),
            dataType: 'json',
            contentType: 'application/json',
            headers: {
                'X-CSRFToken': token
            }
        }).done(function(){
            window.location.reload();
        })
    });
}

// change whether signups should be enabled
$('#enable-signups .dropdown-menu').on('click', '> *', function () {
    const parent = $('#enable-signups');
    const paths = {
        success: parent.data('path'), error: parent.data('path-error')
    };
    const data = { name: "enable_signups", enabled: $(this).data('action') == "enable" }
    const token = $('#enable-signups').data('csrf');
    changeSiteSetting(paths, data, token)
});

// change whether room creation should be enabled
$('#enable-room-creation .dropdown-menu').on('click', '> *', function () {
    const parent = $('#enable-room-creation');
    const paths = {
        success: parent.data('path'), error: parent.data('path-error')
    };
    const data = { name: "enable_room_creation", enabled: $(this).data('action') == "enable" }
    const token = parent.data('csrf');
    changeSiteSetting(paths, data, token)
});

// change whether personal room viewing should be enabled
$('#enable-room-viewing .dropdown-menu').on('click', '> *', function () {
    const parent = $('#enable-room-viewing');
    const paths = {
        success: parent.data('path'), error: parent.data('path-error')
    };
    const data = { name: "enable_room_viewing", enabled: $(this).data('action') == "enable" }
    const token = parent.data('csrf');
    changeSiteSetting(paths, data, token)
});

// change whether group creation should be enabled
$('#enable-group-creation .dropdown-menu').on('click', '> *', function () {
    const parent = $('#enable-group-creation');
    const paths = {
        success: parent.data('path'), error: parent.data('path-error')
    };
    const data = { name: "enable_group_creation", enabled: $(this).data('action') == "enable" }
    const token = parent.data('csrf');
    changeSiteSetting(paths, data, token)
});

// change whether group room creation should be enabled
$('#enable-group-room-creation .dropdown-menu').on('click', '> *', function () {
    const parent = $('#enable-group-room-creation');
    const paths = {
        success: parent.data('path'), error: parent.data('path-error')
    };
    const data = { name: "enable_group_room_creation", enabled: $(this).data('action') == "enable" }
    const token = parent.data('csrf');
    changeSiteSetting(paths, data, token)
});