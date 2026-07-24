import { check, assert } from "../_shared/check-helpers.js"
import { describeDiscount } from "./todo.js"

check("describeDiscount(1000, 0.1) は \"¥1,000 (10%引き)\"", () => {
    assert.equal(describeDiscount(1000, 0.1), "¥1,000 (10%引き)")
})

check("describeDiscount(50000, 0.25) は \"¥50,000 (25%引き)\"", () => {
    assert.equal(describeDiscount(50000, 0.25), "¥50,000 (25%引き)")
})
