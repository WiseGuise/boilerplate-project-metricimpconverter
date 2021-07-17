const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite( 'Unit Tests', function () {
    
    suite( "Function convertHandler.getNum(input)", function () {
        
        test( "Whole Number Input", function ( done ) {
            let input = "32L";
            assert.equal( convertHandler.getNum( input ), 32 );
            done();
        } );

        test( "Decimal Input", function ( done ) {
            let input = "32.2L";
            assert.equal( convertHandler.getNum( input ), 32.2 );
            done();
        } );

        test( "Fractional Input", function ( done ) {
            let input = "1/32L";
            assert.equal( convertHandler.getNum( input ), 1 / 32 );
            done();
        } );

        test( "Fractional Input w/ Decimal", function ( done ) {
            let input = "1.2/32L";
            assert.equal( convertHandler.getNum( input ), 1.2 / 32 );
            done();
        } );

        test("")


    })

});