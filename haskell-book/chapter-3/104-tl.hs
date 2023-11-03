module TopOrLocal where

topLevelFunction :: Integer -> Integer -- what is this arrow ->, abstraction for computation input -> output
topLevelFunction x = -- pass in value when calling this fcn, takes in integer outputs integer
  x + woot + topLevelValue
  where woot :: Integer
        woot = 10

topLevelValue :: Integer -- type
topLevelValue = 5 -- assign