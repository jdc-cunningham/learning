#include <iostream>

int main()
{
  int smaller {};
  int larger {};

  std::cout << "Enter an integer ";
  std::cin >> smaller;
  std::cout << "Enter a larger integer ";
  std::cin >> larger;

  if (smaller > larger)
  {
    int tmp {};
    tmp = smaller;
    smaller = larger;
    larger = tmp;
  }

  std::cout << "The smaller value is " << smaller << "\n";
  std::cout << "The larger value is " << larger;
}