#include <iostream>

int readNumber();
void writeAnswer(int answer);

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

// compile with g++ main.cpp io.cpp -o main