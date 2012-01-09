
/** section: Javascript_Global_Methods
 * parseFloat(string) -> Number
 * - string (String): A string that represents the value you want to parse.
 *
 * parseFloat is a top-level function and is not associated with any object.
 *
 * parseFloat parses its argument, a string, and returns a floating point number. If it encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters. Leading and trailing spaces are allowed.
 *
 * If the first character cannot be converted to a number, parseFloat returns [[NaN `NaN`]].
 *
 * For arithmetic purposes, the NaN value is not a number in any radix. You can call the [[isNaN `isNaN()`]] function to determine if the result of parseFloat is `NaN`. If `NaN` is passed on to arithmetic operations, the operation results will also be `NaN`.
 *
 * #### Example: `parseFloat` returning a number
 *
 *     The following examples all return 3.14
 *     
 *     parseFloat("3.14");
 *     parseFloat("314e-2");
 *     parseFloat("0.0314E+2");
 *     parseFloat("3.14more non-digit characters");</pre>
 *
 * #### Example: `parseFloat` returning NaN
 *  
 * The following example returns `NaN`
 *     
 * 	parseFloat("FF2");
 * 
 * #### See Also
 *
 * * [[parseInt `parseInt()`]]
 *
 **/
