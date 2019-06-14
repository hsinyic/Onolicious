import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
    stages: [
        { duration: "10s", target: 33*5 },
        { duration: "10s", target: 33*5 },
        { duration: "10s", target: 33*5 },
    ]
};
export default function () {
    sleep(Math.floor(Math.random() * 2));
    if (Math.random() > 0.2) {
        var dest = Math.round(Math.random() * 9* 10 ** 6)
    } else {
        var dest = Math.round(9 * 10 ** 6  + Math.random() * 10 ** 6)
    }
    
    let res = http.get("http://localhost:3050/API/info/" + dest + "/");
    check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
};