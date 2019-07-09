# TXN Triage - Work In Progress

A little node project that identifies and validates transaction data provided via a csv file.  The data is compiled manually and does not always conform to the requested data format.  This project aims to determine whether sufficient and plausible data has been provided that allows for the required calculations to take place.


### Prerequisites

You'll need node and npm to run this locally.

Versions used:
- Node 12.3.1
- npm 1.16.0


### Current Status
- Splitting CSV into columns, identifying exact matches and validating data format is up. 


### Up Next
- Infer missing columns based on data format.
- Remove duplicate columns
- Implement confidence level



