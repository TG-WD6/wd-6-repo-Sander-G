import java.util.ArrayList;
import java.util.List;

public class Fishgrounds {
    private final Pool pool;
    private Race race; // Make Race a Singleton

    public Fishgrounds(List<Fish> initialFish) {
        this.pool = new Pool(initialFish);
    }
    
    public void race() {
        this.race = new Race(this.pool.getRandomListOfFish());
        this.race.start();
        for (Fish fish : this.race.getParticipants()) {
            this.pool.returnFish(fish);
        }
    }

    public static void main(String[] args) {
        List<Fish> initialFishies = new ArrayList<>();
        initialFishies.add(new Goldfish("Paul"));
        initialFishies.add(new Goldfish("John"));
        initialFishies.add(new Goldfish("Ringo"));
        initialFishies.add(new Goldfish("George"));
        Fishgrounds fishgrounds = new Fishgrounds(initialFishies);
        fishgrounds.race();
    }
}
