from collections import defaultdict


def main():
    part1()
    part2()


def part1():
    lanternfish(18)


def part2():
    lanternfish(256)


def lanternfish(days):
    fishes = {i: open("input.txt").read().split(",").count(str(i))
              for i in range(9)}
    print(fishes)
    # print(fishes)
    for _ in range(days):
        new_fishes = fishes[0]
        for i in range(1, 9):
            fishes[i-1] = fishes[i]
        fishes[8] = new_fishes
        fishes[6] += new_fishes
    print(sum(fishes.values()))
    print(fishes)


if __name__ == "__main__":
    main()


{
    '0': 4,
    '1': 3,
    '2': 3,
    '3': 2,
    '4': 2,
    '5': 4,
    '6': 4,
    '7': 3,
    '8': 3
}


{0: 3, 1: 5, 2: 3, 3: 2, 4: 2, 5: 1, 6: 5, 7: 1, 8: 4}
