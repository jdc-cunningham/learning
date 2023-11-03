#include "io.h"
#include <iostream>

int main()
{
  int x {};
  int y {};

  std::cout << "Enter a number \n";
  x = readNumber();
  std::cout << "Enter another number \n";
  y = readNumber();
  writeAnswer(x + y);
  return 0;
}