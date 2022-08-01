import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Pool {
    private List<Fish> fishies;

    public class Hatchery {
        // BONUS: Hatchery class that uses Factory pattern to create new fish
        // Hatchery class can spawn fish
        // Hatchery class automatically adds fish to the pool on a timer
    }

    public Fish getRandomFish() {
        return fishies.remove((int) (Math.random() * fishies.size()));
    }

    public void returnFish(Fish fish) {
        fishies.add(fish);
    }

    public Set<Fish> getRandomListOfFish() {
        Set<Fish> participants = new HashSet<>();
        while (participants.size() < 4) {
            participants.add(getRandomFish());
        }
        return participants;
    }

    public Pool(List<Fish> fishies) {
        this.fishies = fishies;
    }
}
