module FunctionWithWhere where

printInc n = print plusTwo
  where plusTwo = n + 2

-- with a let example
-- let x = 5 in x * x
-- can be rewritten with where as
-- mult = x * x
--  where x = 5
