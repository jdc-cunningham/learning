module FunctionWithLet where

printInc2 n = let plusTwo = n + 2
              in print plusTwo

-- let can be as simple as
-- let x = 5 in x * x which would be 25