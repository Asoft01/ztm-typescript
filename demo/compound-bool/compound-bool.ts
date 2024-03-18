/* eslint-disable */
import { strict as assert } from "assert";

// NOT
const writing = true; 
const reading = !writing; 
assert.equal(reading, false);
// OR 
const rating = 9; 
const favouriteMovie= false;

const suggestionMovie = rating > 8 || favouriteMovie;
assert.equal(suggestionMovie, true);

// AND 
const age = 18; 
const isTeenager = age >= 13 && age < 20; 
assert.equal(isTeenager, true);

const packageWeight = 30; 
const packageLength = 50;
const shippingDistance = 99; 
const air = true; 
const priority = true; 
const feeExemption = false; 

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);