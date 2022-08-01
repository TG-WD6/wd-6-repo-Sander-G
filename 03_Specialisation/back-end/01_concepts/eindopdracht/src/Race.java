import java.util.Set;

public class Race {
    private Set<Fish> participants;

    public Set<Fish> getParticipants() {
        return participants;
    }

    public void start() {
        System.out.println(participants);
        // Run a race using multi-threading
        // Race time depends on fish swimspeed + random value (A fish doesn't swim the same speed every race)
        // Use Thread Safety to prevent ties!
    }

    public Race(Set<Fish> participants) {
        this.participants = participants;
    }
}
