import Greet from './Unit Testing Activity';
describe('test Greet()', function () {
    it('should be called', function () {
        expect(Greet('Elizabeth')).toBeCalled("Hello, Elizabeth");
    });
    it('should be called', function () {
        expect(Greet()).toBeCalled("Hello there!");
    });
    it('should be called', function () {
        expect(Greet('JOSE')).toBeCalled("HELLO JOSE!");
    });
    it('should be called', function () {
        expect(Greet(['Jose','Pep'])).toBeCalled("Hello, Jose, Pep");
    });
    it('should be called', function () {
        expect(Greet(['Alex','Arsene', 'Jose', 'Zidane'])).toBeCalled("Hello, Alex, Arsene, Jose, Zidane");
    });
});
