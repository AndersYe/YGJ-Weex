define(function (require, exports, module) {
    if (window.DeviceMotionEvent) {
        alert(1);
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }

    var isShake = false;

    function deviceMotionHandler(eventData) {
        alert(2);
        // 正在摇一摇
        if (isShake) {
            return false;
        }

        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime - last_update) > 100) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

            if (speed > SHAKE_THRESHOLD) { // 满足摇一摇条件
                alert(3);
                isShake = true;
            }

            last_x = x;
            last_y = y;
            last_z = z;
        }

        alert(4);

        return isShake;
    }
});
