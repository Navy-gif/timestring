/** Declaration file generated by dts-gen */

export = timestring;

type ReturnUnit = 
    'ms' |
    's' |
    'm' |
    'h' |
    'd' |
    'w' |
    'th' |
    'y' 

type TimestringOptions = {
    hoursPerDay?: number
    daysPerWeek?: number
    weeksPerMonth?: number
    monthsPerYear?: number
    daysPerYear?: number
}

declare function timestring(string: string, returnUnit?: ReturnUnit, opts?: TimestringOptions): any;