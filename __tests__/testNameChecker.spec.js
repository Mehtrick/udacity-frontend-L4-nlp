import {checkForName} from "../src/client/js/nameChecker"

describe("Testing the checkForName functionality", () => {
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
    })
    test("Check for Name blank check", () => {
        //JEST is throwing an error because it does not know the used window.alert function
        //therefore I am overriding it with a dummy function, cause it does not matter in this
        //testcase
        const dummyAlert = window.alert;
        window.alert = () => {};
        expect(checkForName()).toBe(false);
        expect(checkForName("   ")).toBe(false);
        expect(checkForName("picard")).toBe(true);
        window.alert = dummyAlert;
    })

});