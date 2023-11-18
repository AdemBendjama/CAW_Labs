
import exf from './echo';
describe('exf function', () => {

    beforeEach(() => {

        jest.spyOn(global.console, 'log');

    });


    afterEach(() => {

        jest.restoreAllMocks();

    });


    test('logs text 5 times', () => {

        exf("echo", 5);

        expect(console.log).toHaveBeenCalledTimes(5);

        expect(console.log).toHaveBeenCalledWith("echo");

    });


    test('logs text 10 times', () => {

        exf("JS from server", 10);

        expect(console.log).toHaveBeenCalledTimes(10);

        expect(console.log).toHaveBeenCalledWith("JS from server");

    });

    test('logs nothing when loop value is set to 0', () => {
        exf("JS from server", 0);
        expect(console.log).not.toHaveBeenCalled();
    });

    test('doesnt accept negative values, logs nothing', () => {
        exf("JS from server", -10);
        expect(console.log).not.toHaveBeenCalled();
    });

});